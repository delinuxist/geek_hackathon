'use client'
import React, { Fragment } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from 'react-icons/ai'
import { DisplayInfoProps } from '../../core/shared/interface';
import Link from 'next/link';

const DisplayInfo = (Props: DisplayInfoProps) => {
  return (
    <>
      <Transition appear show={Props.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[100]' onClose={Props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-300'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                  <button
                    type='button'
                    className='absolute z-10 p-2 duration-200 ease-in-out rounded-full shadow-xl top-2 right-2 w-fit bg-pixel-black text-disruption hover:scale-105'
                    onClick={Props.closeModal}
                  >
                    <AiOutlineClose />
                  </button>
                  <div className="w-full mt-2">
                    <h1 className="text-3xl ">{Props.info?.name}</h1>
                    <p>{Props.info?.position}</p>
                    <div className="w-full mt-4 border-[0.5px] border-software-grey" />
                    <div className="mt-5 " />
                    <p>{Props.info?.content}</p>
                    <div className="mt-4" />
                    <div className="flex items-center justify-center gap-2 ">
                      {
                        Props.info?.links.map(link => (
                          <Link
                            href={link.url}
                            key={link.url}
                            className='hover:text-inspiration'
                            target='_blank'
                          >
                            {link.icon}
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DisplayInfo