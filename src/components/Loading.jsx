import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <Triangle
      visible={true}
      height="80"
      width="80"
      color="#0A66C2"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
export default Loading;
