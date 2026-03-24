import React, { useState } from 'react'
import InputBox from './InputBox'
import api from '../../utils/axios'
import { toast } from 'react-toastify'
import { SEARCH_CONTACTS_ROUTE } from '../../constants/routes'
import ProfileCard from '../../features/Profile/components/ProfileCard'
import useStore from '../../store'


const SearchDialog = ({ title, onClose, description }) => {

    const [searchedContacts, setSearchedContacts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const { setSelectedChatType, setSelectedChatData } = useStore()

    const searchContacts = async (searchTerm) => {
        try {

            if (searchTerm.length > 0) {
                const res = await api.post(SEARCH_CONTACTS_ROUTE, { searchTerm })
                if (res.data.success) {
                    setSearchedContacts(res.data.contacts)
                }
            } else {
                setSearchedContacts([])
            }

        } catch (err) {
            console.log(err)
            toast.error(err)
        }
    }

    const inputHandleChange = (e) => {
        const val = e.target.value
        setSearchTerm(val)
        searchContacts(val)
    }

    const selectNewContact = (contact) => {
        onClose?.()
        setSelectedChatType("contact")
        setSelectedChatData(contact)
        setSearchedContacts([])
    }

    return (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 flex flex-col max-h-[80vh]">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
                    <button onClick={() => onClose?.()} className="text-gray-400 hover:text-gray-200 text-2xl">&times;</button>
                </div>

                <InputBox
                    placeholder={description}
                    type="text"
                    value={searchTerm}
                    onChange={inputHandleChange}
                />
                <div className="mt-4 flex-1 overflow-y-auto space-y-2 pr-1 max-h-64 scrollbar-hide scrollbar-thin scrollbar-thumb-gray-700">
                    {
                        searchedContacts.map((contact) => (
                            <ProfileCard key={contact._id} user={contact} onClick={() => selectNewContact(contact)} />
                        ))
                    }
                </div>
                {
                    searchedContacts.length === 0 && searchTerm.length === 0 &&
                    <div>
                        <div className="absolute w-72 h-72 bg-blue-600/20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
                        <div className="relative m-20 text-center">
                            <div className="text-5xl animate-bounce">💬</div>
                            <h2 className="text-2xl font-semibold text-white mb-2">
                                Search new Contacts
                            </h2>
                        </div>
                    </div>
                }
            </div>



        </div>
    )
}

export default SearchDialog
