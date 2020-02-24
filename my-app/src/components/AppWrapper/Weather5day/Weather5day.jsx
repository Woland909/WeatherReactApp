import React from 'react';
import Weather5dayItem from './Weather5dayItem/Weather5dayItem';


const Weather5day = (props) => {
    let days = [
         [],
         [],
         [],
         [],
         [],
    ]

    props.weather5day.map(e => {
        /* даты из эл массива который пришел из сервера */
        let dataDay = e.dt_txt.slice(8, 10);
        let dataMonth = e.dt_txt.slice(5, 7);
        let dataFullYear = e.dt_txt.slice(0, 4);

        /* узнаем даты которые будут в течении 5 дней в миллисекундах*/
        let day1 = Date.now() + 86400000;
        let day2 = Date.now() + 172800000;
        let day3 = Date.now() + 259200000;
        let day4 = Date.now() + 345600000;
        let day5 = Date.now() + 432000000;

        /*Получаем отдельно дату месяц и год которые будут в течении 5 дней*/
        let getDate1 = new Date(day1).getDate() + '';
        let getMonth1 = new Date(day1).getMonth() + 1 + '';
        let getFullYear1 = new Date(day1).getFullYear() + '';

        let getDate2 = new Date(day2).getDate() + '';
        let getMonth2 = new Date(day2).getMonth() + 1 + '';
        let getFullYear2 = new Date(day2).getFullYear() + '';

        let getDate3 = new Date(day3).getDate() + '';
        let getMonth3 = new Date(day3).getMonth() + 1 + '';
        let getFullYear3 = new Date(day3).getFullYear() + '';

        let getDate4 = new Date(day4).getDate() + '';
        let getMonth4 = new Date(day4).getMonth() + 1 + '';
        let getFullYear4 = new Date(day4).getFullYear() + '';

        let getDate5 = new Date(day5).getDate() + '';
        let getMonth5 = new Date(day5).getMonth() + 1 + '';
        let getFullYear5 = new Date(day5).getFullYear() + '';

        /*Если дата или месяц состоит из одного числа, то дописываем 0 в начало */
        if (getDate1.length === 1) {
            getDate1 = 0 + getDate1
        }
        if (getMonth1.length === 1) {
            getMonth1 = 0 + getMonth1
        }
        if (getDate2.length === 1) {
            getDate2 = 0 + getDate2
        }
        if (getMonth2.length === 1) {
            getMonth2 = 0 + getMonth2
        }
        if (getDate3.length === 1) {
            getDate3 = 0 + getDate3
        }
        if (getMonth3.length === 1) {
            getMonth3 = 0 + getMonth3
        }
        if (getDate4.length === 1) {
            getDate4 = 0 + getDate4
        }
        if (getMonth4.length === 1) {
            getMonth4 = 0 + getMonth4
        }
        if (getDate5.length === 1) {
            getDate5 = 0 + getDate5
        }
        if (getMonth5.length === 1) {
            getMonth5 = 0 + getMonth5
        }
        /*Собираем дату,месяц,год в одну строку*/
        let dateRes1 = `${getDate1}-${getMonth1}-${getFullYear1}`;
        let dateRes2 = `${getDate2}-${getMonth2}-${getFullYear2}`;
        let dateRes3 = `${getDate3}-${getMonth3}-${getFullYear3}`;
        let dateRes4 = `${getDate4}-${getMonth4}-${getFullYear4}`;
        let dateRes5 = `${getDate5}-${getMonth5}-${getFullYear5}`;

        /*Собираем дату,месяц,год в одну строку от элю сервера*/
        let dateResApi = `${dataDay}-${dataMonth}-${dataFullYear}`;

         /*Проверяем на совпадения и добавляем в массив дней*/
        if (dateRes1 === dateResApi) {
            days[0].push(e)
        } else if (dateRes2 === dateResApi) {
            days[1].push(e)
        } else if (dateRes3 === dateResApi) {
            days[2].push(e)
        } else if (dateRes4 === dateResApi) {
            days[3].push(e)
        } else if (dateRes5 === dateResApi) {
            days[4].push(e)
        }
    })
    return (
        days[props.day].map(el =><Weather5dayItem weather={el} />) 
    )
}

export default Weather5day;