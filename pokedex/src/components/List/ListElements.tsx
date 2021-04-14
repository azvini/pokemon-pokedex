import React, { useEffect } from 'react'
import { getLists } from './ListElement.action'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './reducer/store'
type Props = {}

export const ListElements = (props: Props) => {

    const lists = useSelector((state: RootState) => state.listReducer.lists);
    const loaded = useSelector((state: RootState) => state.listReducer.loaded);


    const dispatch = useDispatch()

    useEffect(() => {
        if (!loaded) dispatch(getLists())

    })

    let teste = Object.values(lists[0])

    return (
        <>
            {
                teste.map(e => {
                    return (<li key={e}>
                        {e}
                    </li>)
                })
            }
        </>
    )

}