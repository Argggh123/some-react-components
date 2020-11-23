const path = require('path');
const { src, dest, series } = require('gulp');
const { createProject } = require('gulp-typescript');
const del = require('del');

const packages = {
  common: './packages/common',
  crm: './packages/ui',
};

const copyPackage = (pathToPackage) => () =>
  src(path.resolve(__dirname, pathToPackage, 'package.json')).pipe(dest(path.resolve(
    __dirname,
    pathToPackage,
    'lib',
  )));

const buildPackage = (projectFolder) => () => {
  const project = createProject(path.resolve(__dirname, projectFolder, 'tsconfig.json'));
  return project.src().pipe(project()).pipe(dest(path.resolve(__dirname, projectFolder, 'dist')));
};

const clean = () => {
  return del([
    path.resolve(__dirname, packages.common, 'dist'),
    path.resolve(__dirname, packages.common, 'dist'),
  ]);
};

const buildCrm = series(
  () => del(path.resolve(__dirname, packages.crm, 'dist')),
  buildPackage(packages.crm),
  copyPackage(packages.crm),
  )
;
const buildCommon = series(
  () => del(path.resolve(__dirname, packages.common, 'dist')),
  buildPackage(packages.common),
  copyPackage(packages.common),
);

exports.crm = buildCrm;
exports.common = buildCommon;

exports.build = series(clean, buildCommon, buildCrm);
