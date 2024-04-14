import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "This is the data filled by dynamically",
            filesize: ".8mb",
            close: false,
            tag: { isOpen: true, tagLine: "Download Now", tagColor: "green" }
        },
        {
            desc: "This is the data filled by dynamically",
            filesize: ".5mb",
            close: true,
            tag: { isOpen: false, tagLine: "Upload Now", tagColor: "blue" }
        },
        {
            desc: "This is the data filled by dynamically",
            filesize: "1.2mb",
            close: true,
            tag: { isOpen: true, tagLine: "Upload Now", tagColor: "blue" }
        },
        {
            desc: "This is the data filled by dynamically",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagLine: "Download Now", tagColor: "green" }
        }
    ];
    return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5' >
            {data.map((item, index) => (
                <Card data={item} reference={ ref} />
        ))}
      </div>
  )
}

export default Foreground