import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services"/>
      {services.map(service => {
        const {id, title, icon, text } = service
        console.log(service)

        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      })}
    </section>
  )
}

export default Services
