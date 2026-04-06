"use client"
import React from "react"

export default function FlexBox() {
  return (
    <>
      {/* //-----------------------------------------------------------Direction */}
      <div className="m-10 bg-amber-100 p-5">
        <h1 className="text-black text-3xl pl-3 font-bold text-center">Css Flexbox Direction </h1>
        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            {" "}
            Direction:
            <span className="text-red-900">flex-column</span>
          </h1>
          <div className="mb-10 shadow-lg rounded-3xl p-2 w-80">
            <div className="flex flex-col gap-1">
              <div className="bg-amber-600 p-2 rounded-xl">item1</div>
              <div className="bg-amber-400 p-2 rounded-xl">item2</div>
              <div className="bg-amber-200 p-2 rounded-xl">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            {" "}
            Direction:
            <span className="text-red-900">flex-row</span>
          </h1>
          <div className="mb-10  shadow-lg  rounded-3xl p-2 w-80">
            <div className="flex py-2 gap-1 ">
              <div className="bg-amber-600 p-2 rounded-xl">item1</div>
              <div className="bg-amber-400 p-2 rounded-xl">item2</div>
              <div className="bg-amber-200 p-2 rounded-xl">item3</div>
            </div>
          </div>
        </>
        {/* ............................................................flex-row-reverse */}
        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            {" "}
            Direction:
            <span className="text-red-900">flex-column-reverse</span>
          </h1>
          <div className="mb-10 w-80 shadow-lg rounded-3xl p-2">
            <div className="flex flex-col-reverse py-2 gap-1">
              <div className="bg-amber-600 p-2 rounded-xl">item1</div>
              <div className="bg-amber-400 p-2 rounded-xl">item2</div>
              <div className="bg-amber-200 p-2 rounded-xl">item3</div>
            </div>
          </div>
        </>
        {/* ............................................................flex-row-reverse */}
        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            {" "}
            Direction:
            <span className="text-red-900"> flex-row-reverse</span>
          </h1>
          <div className="mb-10 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex flex-row-reverse py-2 gap-1">
              <div className="bg-amber-600 p-2 rounded-xl">item1</div>
              <div className="bg-amber-400 p-2 rounded-xl">item2</div>
              <div className="bg-amber-200 p-2 rounded-xl">item3</div>
            </div>
          </div>
        </>
      </div>

      {/* //-----------------------------------------------------------Alignment */}
      <div className="m-10 bg-blue-100 p-5">
        <h1 className="text-black text-3xl pl-3 font-bold text-center">Css Flexbox Align Item</h1>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-blue-900">items-start</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex  flex-row items-start gap-1 p-2">
              <div className="bg-blue-600 p-2 rounded-xl size-20">item1</div>
              <div className="bg-blue-400 p-2 rounded-xl size-10 w-15">item2</div>
              <div className="bg-blue-200 p-2 rounded-xl size-15">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-blue-900">items-end</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex items-end gap-1 p-2">
              <div className="bg-blue-600 p-2 rounded-xl size-20">item1</div>
              <div className="bg-blue-400 p-2 rounded-xl size-10 w-15">item2</div>
              <div className="bg-blue-200 p-2 rounded-xl size-15">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-blue-900">items-center</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex items-center gap-1 p-2">
              <div className="bg-blue-600 p-2 rounded-xl size-20">item1</div>
              <div className="bg-blue-400 p-2 rounded-xl size-10 w-15">item2</div>
              <div className="bg-blue-200 p-2 rounded-xl size-15">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-blue-900">items-center</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex items-stretch gap-1 p-2 h-40 ">
              <div className="bg-blue-600 p-2 rounded-xl mb-3">item1</div>
              <div className="bg-blue-400 p-2 rounded-xl mb-3 ">item2</div>
              <div className="bg-blue-200 p-2 rounded-xl mb-3">item3</div>
            </div>
          </div>
        </>
      </div>

      {/* ....................................................................... */}

      <div className="m-10 bg-green-100 p-5">
        <h1 className="text-black text-3xl pl-3 font-bold text-center">Css Flexbox Align Item</h1>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-green-900">items-start</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex  flex-row items-start gap-1 p-2">
              <div className="bg-green-600 p-2 rounded-xl size-20">item1</div>
              <div className="bg-green-400 p-2 rounded-xl size-10 w-15">item2</div>
              <div className="bg-green-200 p-2 rounded-xl size-15">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-green-900">items-end</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex items-end gap-1 p-2">
              <div className="bg-green-600 p-2 rounded-xl size-20">item1</div>
              <div className="bg-green-400 p-2 rounded-xl size-10 w-15">item2</div>
              <div className="bg-green-200 p-2 rounded-xl size-15">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-green-900">items-center</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex items-center gap-1 p-2">
              <div className="bg-green-600 p-2 rounded-xl size-20">item1</div>
              <div className="bg-green-400 p-2 rounded-xl size-10 w-15">item2</div>
              <div className="bg-green-200 p-2 rounded-xl size-15">item3</div>
            </div>
          </div>
        </>

        <>
          <h1 className="text-black text-3xl pl-3 font-bold">
            Items Alignment:
            <span className="text-green-900">items-center</span>
          </h1>
          <div className="mb-10 h-40 w-80 rounded-3xl p-2 shadow-lg">
            <div className="flex items-stretch gap-1 p-2 h-40 ">
              <div className="bg-green-600 p-2 rounded-xl mb-3">item1</div>
              <div className="bg-green-400 p-2 rounded-xl mb-3 ">item2</div>
              <div className="bg-green-200 p-2 rounded-xl mb-3">item3</div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}
