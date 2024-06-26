import {
    Card,
    CardBody,
    Typography,
    CardHeader,
  } from "@material-tailwind/react";
  
  function TestimonialCard({ img, client, title, clientInfo }) {
    return (
      <Card shadow={false} className="border-slate-600 border-2 rounded-2xl p-6 font-loos">
        <CardHeader color="transparent" floated={false} shadow={false}>
          <Typography
            color="black"
            className="lg:mb-20 mb-4 text-2xl font-bold"
          >
            &quot;{title}&quot;
          </Typography>
        </CardHeader>
        <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
          <div>
            <Typography variant="h6" color="blue-gray">
              {client}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-normal !text-slate-900"
            >
              {clientInfo}
            </Typography>
          </div>
          <img src={img} className="max-w-[8rem]" alt={client} />
        </CardBody>
      </Card>
    );
  }

 
  
  const testimonials = [
    {
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus similique nulla nisi deleniti error quos saepe optio sint ab doloremque.!",
      client: "Jessica Devis",
      clientInfo: "Full Stack Developer @Netflix",
      img: "/image/netflix.svg",
    },
    {
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus similique nulla nisi deleniti error quos saepe optio sint ab doloremque.",
      client: "Marcell Glock",
      clientInfo: "Graphic Designer, @Coinbase",
      img: "https://www.material-tailwind.com/image/Logo-coinbase.svg",
    },
  ];
  
  export function Testimonial() {
    return (
      <section className="bg-about bg-no-repeat bg-cover px-8 py-10 lg:py-28">
        <div className="container mx-auto">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-2xl lg:!text-4xl font-loos"
          >
            Les témoignages sincères de notre communauté
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl !text-gray-500 mb-10 lg:mb-20 font-loos"
          >
            Des expériences qui améliorent la vie.
          </Typography>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {testimonials.map((props, key) => (
              <TestimonialCard key={key} {...props} />
            ))}
          </div>
  
          <Card
            shadow={false}
            className="mt-8 bg-white border-slate-700 border-2 text-center text-slate-900 rounded-2xl p-6 shadow-xl font-loos"
          >
            <CardHeader color="transparent" floated={false} shadow={false}>
              <Typography
                color="blue-gray"
                className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
              >
                &quot;Its intuitive design and powerful features make it
                indispensable. I can&apos;t imagine going back to life before
                it!&quot;
              </Typography>
            </CardHeader>
            <CardBody className="items-center mx-auto py-2">
              <img
                src="/image/spotify.svg"
                className="max-w-[8rem] mx-auto grayscale"
                alt="spotify"
              />
              <Typography variant="h6" color="white">
                Emma Roberts
              </Typography>
              <Typography
                variant="paragraph"
                className="font-normal !text-gray-500"
              >
                Chief Executive @Spotify
              </Typography>
            </CardBody>
          </Card>
        </div>
      </section>
    );
  }
  
  export default Testimonial;