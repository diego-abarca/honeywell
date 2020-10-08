import { useSelector as useTypedSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from './index'

export const useSelector: TypedUseSelectorHook<RootState> = useTypedSelector
