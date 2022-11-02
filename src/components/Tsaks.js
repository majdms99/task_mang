import React, { useState } from 'react'
import { IoIosSend, IoIosTrash, IoIosRadioButtonOff, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useAlert } from 'react-alert';
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { AddComplete, CreateTask, DeleteTask, RemoveComplete, Tasks } from '../api/Task';
import Loader from './Loader';
import Menu from './Menu';

const Tsaks = () => {
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const alert = useAlert()
    const queryClient = useQueryClient();


    const mutation = useMutation(CreateTask, {
        onSuccess: (data) => {
            console.log(data);
            alert.success('Added successfully')
            queryClient.invalidateQueries('tasks')
            setLoading(false);
            setDescription('')

        },
        onError: (error) => {
            alert.error(error.response.data.error);
            setLoading(false)
        },
        onMutate: () => {
            setLoading(true)
        },
    })

    const CreateNewTask = () => {
        // console.log(description);
        const Data = {
            "description": description,
        }
        if (description.length > 2) {
            mutation.mutate(Data);
        }
    }

    const { data, isLoading } = useQuery('tasks', Tasks);
    // console.log(data.data.data);
    //Delete Message  Function
    if (!isLoading) {
        // console.log('len', data.data.data);

    }
    //Delete Task Function
    const { mutateAsync: delete_task, } = useMutation(DeleteTask, {
        onSuccess: () => {
            alert.success('Deleted Task success')
            queryClient.invalidateQueries('tasks')
        }
    })
    const deleteTheTask = async (id) => {
        // console.log(id);
        await delete_task(id)
    }

    //Delete Task Function
    const { mutateAsync: complete_task } = useMutation(AddComplete, {
        onSuccess: (data) => {
            console.log(data);
            alert.success('The Task is Completed')
            queryClient.invalidateQueries('tasks')
        }
    })
    const completedTask = async (id) => {
        // console.log(id);
        await complete_task(id)
    }

    const { mutateAsync: not_complete_task } = useMutation(RemoveComplete, {
        onSuccess: (data) => {
            console.log(data);
            alert.success('The Task is Not Completed')
            queryClient.invalidateQueries('tasks')
        }
    })
    const notCompleteTask = async (id) => {
        // console.log(id);
        await not_complete_task(id)
    }


    return (
        <div className='-mt-32 container w-[90%] md:w-1/2 mx-auto font-josefin'>
            <div className='relative'>
                <input
                    className='p-4 w-full bg-lighttext dark:bg-darktext relative'
                    type="text"
                    placeholder=' Enter Activite'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                {
                    description.length > 2 ?
                        loading ? <Loader size={15} /> :
                            <button className='bg-none w-4 h-4 absolute right-4 top-[15px]' onClick={CreateNewTask}><IoIosSend size="22" /></button>
                        : ''
                }

                <div className='bg-lighttext dark:bg-darktext mt-4 p-4'>
                    {

                        isLoading ?
                            <Loader /> :
                            data.data.data?.length > 0 ?
                                data.data.data?.map(item => {
                                    return (
                                        <div className='flex py-2 justify-between items-center ' key={item.id}>
                                            <div className='flex'>
                                                {
                                                    item.complate === false ?
                                                        <button className='mr-2' onClick={() => completedTask(item.id)}>
                                                            <IoIosRadioButtonOff size={23} />
                                                        </button> :
                                                        <button className='mr-2' onClick={() => notCompleteTask(item.id)}>
                                                            <IoMdCheckmarkCircleOutline size={23} />
                                                        </button>
                                                }
                                                <p className={item.complate === false ? '' : 'line-through'}>{item.description}</p>
                                            </div>

                                            <button onClick={() => deleteTheTask(item.id)}><IoIosTrash size={22} className="transition-all duration-300 hover:scale-125 hover:fill-red-700 " /></button>
                                        </div>

                                    )
                                }) :
                                <h2 className='text-xl text-center'>Not Found</h2>
                    }

                    {/* <hr /> */}
                    {/* <div className='flex py-2 justify-between items-center '>
                        <div className='flex'>
                            <button className='mr-2'>
                                <IoIosRadioButtonOff size={24} />
                            </button>
                            <p className=' '>Learn Laravel</p>
                        </div>
                        <button><IoIosTrash size={22} className="transition-all duration-300 hover:scale-125 hover:fill-red-700 " /></button>
                    </div>
                    <hr />
                    <div className='flex py-2 justify-between items-center '>
                        <div className='flex'>
                            <button className='mr-2'>
                                <IoIosRadioButtonOff size={24} />
                            </button>
                            <p className=' '>Learn Laravel</p>
                        </div>
                        <button><IoIosTrash size={22} className="transition-all duration-300 hover:scale-125 hover:fill-red-700 " /></button>
                    </div> */}
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default Tsaks