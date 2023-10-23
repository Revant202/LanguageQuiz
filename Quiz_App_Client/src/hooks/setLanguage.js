import { postServerData } from '../helper/helper'
import * as Action from '../redux/language_reducer'

export const setLanguage = (language) => async (dispatch) => {
    try {
        await dispatch(Action.setLanguageAction(language))
        console.log("language set to - ", language)
    } catch (error) {
        console.log(error)
    }
}


