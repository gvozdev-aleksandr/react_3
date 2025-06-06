import React from "react";
import { StyledProgramms, ProgrammsContainer, ProgrammsWrapper, StyledText, ProggramButton } from "./styled";
import ProgrammList from "@ui/ProgrammItem/ProgrammList";
import Title, { TitleSize } from "@ui/Title/title";
import TitleNotice from "@ui/TitleNotice/titleNotice";
import { ProgrammsInfo } from "@mocks/programmsInfo";

function Programms() {
    return (
        <StyledProgramms>
            <ProgrammsContainer>
                <ProgrammsWrapper>
                    <div>
                        <TitleNotice>наше предложение</TitleNotice>
                        <Title size={TitleSize.MEDIUM} $marginBottom={0}>Лучшие программы для тебя</Title>
                    </div>
                    <StyledText>
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
                    </StyledText>
                    <ProgrammList programs={ProgrammsInfo} />
                    <ProggramButton>Стоимость программ</ProggramButton>
                </ProgrammsWrapper>
            </ProgrammsContainer>
        </StyledProgramms>
    );
}

export default Programms;
