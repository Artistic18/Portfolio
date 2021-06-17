import React from 'react';
import { useLoading, Circles } from '@agney/react-loading';

function Loader() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Circles width="50" />,
  });
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <section style={{ color: '#f50057' }} {...containerProps}>
        {indicatorEl}
      </section>
    </div>
  );
}

export default Loader;
