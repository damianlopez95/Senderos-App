import { call, put } from 'redux-saga/effects'
import InterestPointsActions from '../Redux/InterestPointsRedux'
// import { InterestPointsSelectors } from '../Redux/InterestPointsRedux'

export function * getAllInterestPoints (api) {

  const response = yield call(api.loadAll)
  console.log('Pre Response')

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    console.log('Response OK')
    yield put(InterestPointsActions.interestPointsSuccess(response.data))
  } else {
    console.log('Response FAIL')
    yield put(InterestPointsActions.interestPointsFailure())
  }
}
