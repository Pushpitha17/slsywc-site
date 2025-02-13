import React from "react"

const teamData = {
  chair: [],
  viceChair: [
    {
      img: "manodya.png",
      post: "Chair",
      pillar: "Student Activities Committee",
      name: "Mr. Manodya Nabadawewa",
      uni: ""
    },
    {
      img: "joshiga.png",
      post: "Section Student Representative",
      pillar: "Student Activities Committee",
      name: "Ms. Joshiga Ravikumar",
      uni: ""
    },
    {
      img: "uvindu.png",
      post: "Vice Chair",
      pillar: "Student Activities Committee",
      name: "Mr. Uvindu Kodikara",
      uni: ""
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
      img: "Pragash.png",
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
            Student Activities Committee
          </p>
        </div>
        <div className="md:container mb-12">
          <div className="hidden md:flex flex-col items-center gap-y-6 my-12">
            <div className="flex justify-center items-center gap-5">
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
            {/* <div className="flex">
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
            </div> */}
          </div>
          <div className="md:hidden">
            <div>
              <div className="flex flex-wrap justify-between items-center gap-y-4 my-12">
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
            {/* <div className="flex flex-wrap justify-between gap-y-4">
              {teamData.Team.map((item, index) => (
                <TeamMember
                  key={index}
                  img={item.img}
                  post={item.post}
                  name={item.name}
                  uni={item.uni}
                />
              ))}
            </div> */}
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
      <img
        src={`/assets/Team/${img}`}
        alt=""
        className="absolute w-[90%] left-[5%]"
      />
      <div className="h-[100px] md:h-[140px]"></div>
      <div className="flex flex-col items-center border border-dashed border-blue-900 pt-[60px] pb-4 rounded-2xl bg-black space-y-1">
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
    <div className="w-[150px] md:w-[200px] flex flex-col items-center duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(37,99,235,0.3)]">
      <img src={`/2025/team/${img}`} alt="" className="mb-2 w-full " />
      <div className="flex flex-col text-center justify-center items-center pb-4 space-y-1 text-sm md:text-base">
        <p className="font-semibold bg-text-gradient text-transparent bg-clip-text w-full">
          {name}
        </p>
        <p className="font-medium">{post}</p>
        <p className="font-light text-xs">{pillar}</p>

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
    <div className="w-[150px] md:w-[190px] flex flex-col items-center duration-300 ease-in-out hover:filter hover:drop-shadow-[0_4px_30px_rgba(37,99,235,0.3)]">
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
