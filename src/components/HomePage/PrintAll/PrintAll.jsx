import Container from "@/components/container/Container";
import PrintAllTitle from "./PrintAllTitle/PrintAllTitle";
import PrintAllImage from "./PrintAllImage/PrintAllImage";
import css from "./PrintAll.module.css";

const PrintAll = () => {
  return (
    <div>
      <Container>
        <PrintAllTitle />
      </Container>
      <PrintAllImage />
    </div>
  );
};

export default PrintAll;
