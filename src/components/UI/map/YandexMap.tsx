import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React from 'react';


const YandexMap: React.FC = () => {
    const apiYandexKey = '16244094-4e19-4809-8b8c-570eb0e05edf';
    const coordinatesViolino = [55.684620, 37.541512];

    const defaultState = {
        center: coordinatesViolino,
        zoom: 15,

    };

    return (
        <>
            <YMaps query={{ apikey: apiYandexKey, lang: 'en_RU' }}>
                <Map
                    defaultState={defaultState}
                    className='w-full h-[500px]'
                    modules={['control.ZoomControl']}
                    behaviors={{scrollZoom: false}}

                >
                    <ZoomControl options={{ size: 'small', position: { bottom: 200, left: 10 } }} />

                    <Placemark
                        geometry={coordinatesViolino}
                        options={{
                            iconLayout: 'Violino',
                            iconImageHref: 'https://via.placeholder.com/40', // Ссылка на кастомную иконку
                            iconImageSize: [40, 40],
                        }}
                        properties={{
                            hintContent: 'Собственная метка',
                            balloonContent: 'Это кастомная метка на карте',
                        }} />
                </Map>
            </YMaps>
        </>
    );
};

export default YandexMap;
