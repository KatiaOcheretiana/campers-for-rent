import { RotatingTriangles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingTriangles
      visible={true}
      height="60"
      width="60"
      color="#4fa94d"
      ariaLabel="rotating-triangles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
