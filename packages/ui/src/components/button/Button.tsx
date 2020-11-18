import React from 'react';
import { fetchSomeData } from '@some-react-components/common';

export function Button(): React.ReactElement {

  React.useEffect(() => {
    fetchSomeData()
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      Button
    </div>
  );
}
