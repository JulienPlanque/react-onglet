import React, { useState } from 'react'
import './Onglets.css'

export default function Onglets() {

    const [stateOnglets, setStateOnglets] = useState(1)

    const goFr = () => {
        setStateOnglets(1);
    }

    const goEn = () => {
        setStateOnglets(2);
    }
    return (
        <div>
            <div className="contBtn">
                <div className={`onglets ${stateOnglets === 1 ? 'active' : ''}`} onClick={goFr}>Français</div>
                <div className={`onglets ${stateOnglets === 2 ? 'active' : ''}`} onClick={goEn}>Anglais</div>
            </div>
            <div className="container">
                {stateOnglets === 1 ?
                    <p className="contenu fr">
                        FR
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos at temporibus quibusdam nulla exercitationem aut sapiente. Consectetur consequatur maiores minus, ex, eaque fugit provident illum dolorum necessitatibus similique repellendus. Error.
                </p>
                    :
                    <p className="contenu en">
                        EN
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam officia ratione quo neque? Pariatur expedita quis accusantium quia ducimus ullam impedit officia, velit repellat dignissimos odio vel asperiores odit ipsum dolorem molestias reiciendis facere. Dolorum debitis impedit dolores molestiae necessitatibus cum, aperiam quos aut enim. Exercitationem delectus vero beatae, veniam iste commodi totam eligendi aliquam. Maiores, iure voluptatibus rerum ullam provident suscipit consectetur expedita voluptas accusantium! Iste, reprehenderit animi, cupiditate quia dolorum delectus tempore incidunt id distinctio eum esse earum non porro. Nesciunt eos dolor eaque ducimus iste cupiditate quae praesentium aspernatur dolorum eum debitis dignissimos corrupti non labore ad odio, voluptates nisi fugit adipisci ipsam rerum unde quis a minima. Minima quasi dicta similique, sequi inventore, totam deserunt asperiores magni vero sapiente dolor dolorum!
                </p>
                }
            </div>
        </div>
    )
}
