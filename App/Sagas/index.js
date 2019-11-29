import { takeLatest, all } from 'redux-saga/effects'

//import DebugConfig from '../Config/DebugConfig'
import InterestPointsAPI from '../Services/InterestPoints'
import WeatherAPI from '../Services/WeatherApi'

/* ------------- Types ------------- */

import {InterestPointsTypes} from '../Redux/InterestPointsRedux'
import { WeatherTypes } from '../Redux/WeatherRedux'

/* ------------- Sagas ------------- */

import {getAllInterestPoints} from './InterestPointsSagas'
import { getWeather } from './WeatherSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
//const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

const ApiInterestPoints = InterestPointsAPI.create()
const wApi = WeatherAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([

    takeLatest(InterestPointsTypes.INTEREST_POINTS_REQUEST, getAllInterestPoints, ApiInterestPoints),
    takeLatest(WeatherTypes.WEATHER_REQUEST, getWeather, wApi)
  ])
}
