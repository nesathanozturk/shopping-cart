import { WarningContainer, WarningMessage, WarningIcon } from "./styles";

const WarningText = () => {
  return (
    <>
      <WarningContainer>
        <WarningMessage>
          <WarningIcon />
          There is nothing in your basket!
        </WarningMessage>
      </WarningContainer>
    </>
  );
};

export default WarningText;
