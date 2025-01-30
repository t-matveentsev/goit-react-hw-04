import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#e9caae"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
