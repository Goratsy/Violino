import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React from 'react';
import logo_violino from '../../../assets/svg/logo_violino.svg'

const YandexMap: React.FC = () => {
    const apiYandexKey = '16244094-4e19-4809-8b8c-570eb0e05edf';
    const coordinatesViolino = [55.684620, 37.541512];

    const defaultState = {
        center: coordinatesViolino,
        zoom: 16,

    };

    return (
        <>
            <YMaps query={{ apikey: apiYandexKey, lang: 'ru_RU' }}>
                <Map
                    defaultState={defaultState}
                    className='w-full h-[500px]'
                    modules={['control.ZoomControl']}
                    instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
                >
                    <ZoomControl options={{ size: 'small', position: { bottom: 200, left: 10 } }} />

                    <Placemark
                        geometry={coordinatesViolino}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: logo_violino, // Ссылка на кастомную иконку
                            iconImageSize: [45, 45],
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
