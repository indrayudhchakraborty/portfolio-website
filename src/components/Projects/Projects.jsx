import './Projects.scss'

export default function About() {
    return (
        
        <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
    <div class="w-full rounded">
        <img src="https://i.pinimg.com/564x/42/0d/e3/420de3710f96e53a1987b43481ae51e4.jpg"
            alt="image" class="nore" style={{height: "305px",
                        width: "421px",
                        objectFit: "cover"}} />
    </div>
    <div class="w-full rounded">
        <img src="https://cdna.artstation.com/p/assets/images/images/041/886/362/smaller_square/man-creepyhosp.jpg?1632976009"
            alt="image" class="nore" style={{height: "305px",
                        width: "421px",
                        objectFit: "cover"}} />
    </div>
    <div class="w-full rounded">
        <img src="https://cdnb.artstation.com/p/assets/images/images/041/886/411/smaller_square/man-cakefinalforthelasttime.jpg?1632976152"
            alt="image" class="nore" style={{height: "305px",
                        width: "421px",
                        objectFit: "cover"}} />
    </div>
</div>
    )
}
