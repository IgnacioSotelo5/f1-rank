export function DriverCard ({data}) {
    const driverImg = 'https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/ricciardo.jpg.img.1920.medium.jpg/1677069646195.jpg'
    console.log(driverImg);
    return (
        <li className="driver-container">
            <div className="driver-position">
                <span>{data.position}</span>
            </div>
            <div className="driver-info" style={{backgroundImage: `url(${data.team.logo})`}}>
                        <img className="driver-image" src={data.driver.image} alt={data.driver.name} />
                        <img className= "driver-flag"src={data.driver.flag} alt="Country Flag" />
                    <div>
                        <h2>{data.driver.name}</h2>
                    </div>
            </div>
            <div className="driver-points">
                <span>{data.points === null ? 0 : data.points}</span>
            </div>

        </li>
    )
}