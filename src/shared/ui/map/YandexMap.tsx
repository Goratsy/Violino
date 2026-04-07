import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React from 'react';
import { env } from '@/shared/config/env';

const apiYandexKey = env.yandexMapApiKey;

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
                    instanceRef={(ref) => {
                        if (ref) {
                            ref.behaviors.disable('scrollZoom');
                        }
                    }}
                >
                    <ZoomControl options={{ size: 'small', position: { bottom: 200, left: 10 } }} />

                    <Placemark
                        geometry={coordinatesViolino}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: '/assets/svg/logo_violino.svg',
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
