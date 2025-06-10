import React from "react";
import { StyledProgramms, ProgrammsContainer, ProgrammsWrapper, StyledText, PhotoWrapper, ProggramButton } from "./styled";
import ProgrammList from "@ui/ProgrammItem/ProgrammList";
import ProgramPhotoList from "../ProgramPhotoList/ProgramPhotoList";
import Title, { TitleSize } from "@ui/Title/title";
import TitleNotice from "@ui/TitleNotice/titleNotice";
import { ProgrammsInfo } from "@mocks/programmsInfo";
import { ProgramPhotos } from "@mocks/programPhotos";

function Programms() {
    return (
        <StyledProgramms id="programm">
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
                <PhotoWrapper>
                    <ProgramPhotoList photos={ProgramPhotos} />
                </PhotoWrapper>
            </ProgrammsContainer>
        </StyledProgramms>
    );
}

export default Programms;
