import React from 'react'

function DataComponet() {
    const data = [
        {
            title: "The wet code Base",
            date: "July 13,2020 .☕ 1min read",
            post:"Come waste your time with me"
        },
        {
            title: "Goodby,clean Code",
            date: "January 11,2020 .☕ 5min read",
            post:"Let clean code guide you.Then let it go"
        },
        {
            title: "My decade in interview",
            date: "January 1,2020 .☕ 1min read",
            post:"Personal Reflection"
        }
    ]
    const res = data.map( element => {
        return (
            <>
                <h1>{element.title}</h1>
                <h2>{element.date}</h2>
                <p>{element.post}</p>
            </>
           
        )
    })
  return (
      <div>
          {res}
    </div>
  )
}

export default DataComponet