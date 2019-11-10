/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import WeatherActions from '../Redux/WeatherRedux'
// import { WeatherSelectors } from '../Redux/WeatherRedux'

export function * getWeather (Api, action) {
  //const { data } = action
  // get current data from Store
  // const currentData = yield select(WeatherSelectors.getData)
  // make the call to the api
  console.warn('hola')
  const response = yield call(Api.getWeather)

  // success?
  if (response.ok) {
    console.warn(response.data)
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(WeatherActions.weatherSuccess(response.data))
  } else {
    console.warn(response)
    yield put(WeatherActions.weatherFailure())
  }
}
