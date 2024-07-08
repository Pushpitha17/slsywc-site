import React from "react"

const teamData = {
  chair: [
    
  ],
  viceChair: [
  {
      img: "Priyan.png",
      post: "Chair",
      name: "Priyan Dilshan",
      uni: "UOM"
    },
    {
      img: "Amirah.png",
      post: "Secretary",
      name: "Amirah Rasmin",
      uni: "IIT"
    },
    {
      img: "Uvindu.png",
      post: "Vice Chair",
      pillar: "Program & Delivery",
      name: "Uvindu Kodikara",
      uni: "UOM"
    },
    {
      img: "Aduwa.png",
      post: "Vice Chair",
      pillar: "Finance & Partnerships",
      name: "Aduwa Geethanjana",
      uni: "KDU"
    },
    {
      img: "Sudesh.png",
      post: "Vice Chair",
      pillar: "Public Visibility",
      name: "Sudesh Thashmika",
      uni: "UOR"
    }
  ],
  Team: [
    {
      img: "Sanjana.png",
      post: "Proposal Writer",
      name: "Sanjana Attanayake",
      uni: "UWU"
    },
    {
      img: "Sasvi.png",
      post: "Content Writer",
      name: "Sasvi Kulatunge",
      uni: "UOM"
    },
    {
      img: "Vishmith.png",
      post: "Program",
      name: "Vishmith Silva",
      uni: "KDU"
    },
    {
      img: "Tathila.png",
      post: "Logistics",
      name: "Tathila Siriwardhana",
      uni: "SLTC"
    },
    {
      img: "Hafsa.png",
      post: "Partnership",
      name: "Hafsa Zainab",
      uni: "SLIIT"
    },
    {
      img: "Tathila.png",
      post: "Industry Engagement",
      name: "Pragash Sasitharan",
      uni: "IIT"
    },
    {
      img: "Rashmi.png",
      post: "Publicity",
      name: "Rashmi Mihirangi",
      uni: "KDU"
    },
    {
      img: "Kavishka.png",
      post: "Design",
      name: "Kavishka Kalhara",
      uni: "UOR"
    },
    {
      img: "Diluk.png",
      post: "Design",
      name: "Diluk Udayakantha",
      uni: "CINEC"
    },
    {
      img: "Pushpitha.png",
      post: "Webmaster",
      name: "Pushpitha Geeganage",
      uni: "UOM"
    }
  ]
}

function Team() {
  return (
    <section>
      <div className="md:pb-40 container pt-16 md:pt-40">
        <div className="flex flex-col items-center mb-20">
          <p className="text-2xl md:text-5xl font-bold text-center bg-text-gradient text-transparent bg-clip-text uppercase">
            Organizing Committee
          </p>
        </div>
        <div className="md:container mb-12">
          <div className="hidden md:flex flex-col items-center gap-y-6 my-12">
            <div className="flex">
              {teamData.chair.map((item, index) => (
                <Chair
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
              {teamData.viceChair.map((item, index) => (
                <ViceChair
                  key={index}
                  img={item.img}
                  pillar={item.pillar}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="flex">
              {teamData.Team.slice(0, 4).map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="flex">
              {teamData.Team.slice(4, 7).map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
            <div className="flex">
              {teamData.Team.slice(7, 10).map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <div>
              <div className="flex flex-wrap justify-between gap-y-4 my-12">
                {teamData.chair.map((item, index) => (
                  <Chair
                    key={index}
                    img={item.img}
                    post={item.post}
                    name={item.name}
                    uni={item.uni}
                  />
                ))}
              </div>
              <div className="flex flex-wrap justify-between gap-y-4 my-12">
                {teamData.viceChair.map((item, index) => (
                  <ViceChair
                    key={index}
                    img={item.img}
                    pillar={item.pillar}
                    post={item.post}
                    name={item.name}
                    uni={item.uni}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-4">
              {teamData.Team.map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chair({
  img,
  post,
  name,
  uni
}: {
  img: string
  post: string
  name: string
  uni: string
}) {
  return (
    <div className="w-[150px] md:w-[190px] relative mx-2">
      <img src={`/assets/Team/${img}`} alt="" className="absolute w-[90%] left-[5%]" />
      <div className="h-[100px] md:h-[140px]"></div>
      <div className="flex flex-col items-center border border-dashed border-red-900 pt-[60px] pb-4 rounded-2xl bg-black space-y-1">
        <p className="font-semibold">{post}</p>
        <p className="font-bold bg-text-gradient text-transparent bg-clip-text">
          {name}
        </p>
        <p className="font-extralight">{uni}</p>
      </div>
    </div>
  )
}

function ViceChair({
  img,
  pillar,
  post,
  name,
  uni
}: {
  img: string
  pillar: string
  post: string
  name: string
  uni: string
}) {
  return (
    <div className="w-[150px] md:w-[190px] flex flex-col items-center ">
      <img src={`/assets/Team/${img}`} alt="" className="mb-2 w-full" />
      <div className="flex flex-col items-center pb-4 space-y-1 text-sm md:text-base">
        <p className="font-medium">{post}</p>
        <p className="font-light text-xs">{pillar}</p>
        <p className="font-semibold bg-text-gradient text-transparent bg-clip-text">
          {name}
        </p>
        <p className="font-extralight">{uni}</p>
      </div>
    </div>
  )
}

function TeamMember({
  img,
  post,
  name,
  uni
}: {
  img: string
  post: string
  name: string
  uni: string
}) {
  return (
    <div className="w-[150px] md:w-[190px] flex flex-col items-center ">
      <img src={`/assets/Team/${img}`} alt="" className="w-full mb-2" />
      <div className="flex flex-col items-center pb-4 space-y-1 text-sm md:text-base">
        <p className="font-medium">{post}</p>
        <p className="font-semibold bg-text-gradient text-transparent bg-clip-text">
          {name}
        </p>
        <p className="font-extralight">{uni}</p>
      </div>
    </div>
  )
}

export default Team