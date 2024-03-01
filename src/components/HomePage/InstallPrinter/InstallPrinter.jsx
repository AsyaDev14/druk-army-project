import TitleInstallPrinter from "./TitleInstallPrinter/TitleInstallPrinter";
import css from "./InstallPrinter.module.css";

const InstallPrinter = () => {
  return (
    <div>
      <div className={css.container}>
        <TitleInstallPrinter />
      </div>
    </div>
  );
};

export default InstallPrinter;
