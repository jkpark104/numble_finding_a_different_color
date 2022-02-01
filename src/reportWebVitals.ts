import { ReportHandler } from 'web-vitals';

if (process.env.NODE_ENV === 'production') {
  const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };

  reportWebVitals(console.log);
}
