import React from "react";
import { PhotosList, PhotoItem, StyledImg } from "./styled";

function ProgramPhotoList({ photos = [] }) {
    return (
        <PhotosList>
            {photos.map(({ id, src, alt }) => (
                <PhotoItem key={id}>
                    <StyledImg src={src} width={250} height={250} alt={alt} loading="lazy" />
                </PhotoItem>
            ))}
            
        </PhotosList>
    );
}

export default ProgramPhotoList;
