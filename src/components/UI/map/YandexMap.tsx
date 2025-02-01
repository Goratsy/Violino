import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React from 'react';
import logo_violino from '../../../assets/svg/logo_violino.svg'

const apiYandexKey = import.meta.env.VITE_YANDEX_MAP_API;

const YandexMap: React.FC = () => {
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
                    modules={['control.ZoomControl', 'control.FullscreenControl']}
                    instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
                >
                    <ZoomControl options={{ size: 'small', position: { bottom: 200, left: 10 } }} />

                    <Placemark
                        geometry={coordinatesViolino}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: logo_violino,
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
