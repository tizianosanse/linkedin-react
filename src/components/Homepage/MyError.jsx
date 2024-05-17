import { Alert } from "react-bootstrap";

const MyError = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Qualcosa è andato storto
      </Alert.Heading>
    </Alert>
  );
};
export default MyError;
