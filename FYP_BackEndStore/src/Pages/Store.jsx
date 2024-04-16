import './Store.css';
import './GeneralPage.css';
import CardBody from '../Compoents/ItemCards/CardBody';
import RatingStars from '../Compoents/ItemCards/RatingStars';
import ModalBtn from '../Compoents/Modal/ModalBtn';
import PicGallery from '../Compoents/PicGallery/PicGallery';


export default function Store() {

    return (
        <>
            <div>
                <div className='center flex '>
                    <PicGallery/>
                  
                </div>


                <CardBody picUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgT7PQ29HRKqJGZIDpWMB5IeOyies6VBMRVd00GZ9-g&s">
                    hi
                </CardBody>

                <CardBody picUrl="data:image/jpeg;base64,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">
                    hi
                    <RatingStars />
                </CardBody>
                <CardBody picUrl="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xAA4EAABBAECBQEGBAQGAwAAAAABAAIDBBEFIQYSMUFREwcUIjJhcRUjgZEzQnKhFlKxwdHwJDVD/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EACURAAIDAAEEAgIDAQAAAAAAAAABAgMRBAUSITEiUSNBExRxQv/aAAwDAQACEQMRAD8A7YiIgAiIgAiIgAmERADCYREANlx/2161abdq6bVnkiiaC6QNdjmPZdekeI2OeRs0ZP2X5o4z1P8AFOILdgZ5ecgZKrsfgnBayLh1G7VstsRWpmvYc55yv0P7PNas6/wxXu3ABMXOacd8HGV+daNd929BVi+eZ4aNvK/UHD+lw6NpNejA0Bsbd8dz3KhVuk7MJDCYRFeUjCIiABRCi4AREXQCIiACIiACIiAMrV1G/W02q6zclEcTepK0ta16tpbmwnMtl/yxt/1KrVmCzrBD9TeHAHLYh8rUly+dVxo7J+SyFbkY1r2laRHWmZVjs2eaMgFrMbkLgVoyeo9zg5uXE4I8rvP+HqWNoG/sFVeL+GoPTMjIgMDsFl19Zrulhequ01vYrw+zUtTm1Ww8EVCAyPHUkLufVfn/AIIku8O6h69ORxjd/EjOeVwXeNPtsvU47EfR7c48LZoshNfEosT3TYRETBWEREACiFFwAiIugEREAEREAZVU4r4o9wd7hpvLJdcNyd2xj6/VbnGl40NAnexzmySYYxzTgglc/wBDhL5jI7me8/M525JSHO5f8EPHstrh3PyTGl0pJpTatyGWw85c87qea3lGF5VWBjcNGF7LwnL5E77NkOxSQUfrcQlqlvUkLdfIGhR12y1zS3mGVCmEu7UDK3FTbHEctAPlW72f3XOjnpOO0Z5mD6d1Wp3YYf7L34Iu+hxEGSA/nMLAB5/6F6XpdrV3kotWxOnoiL1AoEREACiFFwAiIugEREAERZQBz72mWuazSpskz1e9v+i1NDhEUIce5ytDieSXUOLLRDMNixGB9gvexbNdjYYfHVea6m3db/HEbqWImptQZCMNOT4UfPqs5OWbfRRcUxJJe7c+VtQx+rMGk7Hoq6en0wXlaxlR+zAvzSlwc47+FrSOd2echS9Om13M2RmH5wPqt86PCysTKcHqno0QS8I4+0qUhlI65C1all1bVq0gy14kABH3VglhYOd0Yw1pxv3XhLThmfDK4YLXgk9MborpjGaZCcPGo6ow5aD9Asr4ryMlgjfE8PYWjBHdfa2zPCIiABRCi4ARAi6AQ4AJOwC8L1yGjXdNO7laOg7k+FSNV163dc5jHenEejW9x9VdVTKx4ii6+NS1lo1HX6dMEMeJZB/K3fB+qiH8YOc0htUNdjYk9FVwC52BuXH91NU+GrkzOeblhjxnJO6c/r01L5sz/wC1fa/xohpT6lmSyf4sjuZxXnLG2Vw5yc/Qr7qD1pHNdsGnH3WJ67mkkE5O36LIs5fBdjjXXskaFPH5LWzniPP0IWt3d+7t1L16LZq7YZ2ZaRlj2ncfqosRRx/G7qAt9+rwiq1sT/iAH0woucZJ5FIbjXKLXzbJPStPkqPIlsiaNvykn4h9FIXozPXcIsOPYZ6qsxak33R+X4kzkbry0fVp57DhLOBG09ilBvCQfSsM3tShrCf4bB0WjdHp2C2Ih0X7qaNuOSMiR2cd/CitdhbVkikhBLJRknwU1VVTKOy8Ctt10JZDyWXgu6JaktbGBC4YdnrlWRc20inc1AymicGLHN8eFLxa7qWmv9G7EX8p3LhuR909ChSj+OWiMuS4yyyOFyRaWm6pW1BgMLwHkbsPULdVTTTxl8ZKS1AoiLhILDnBoJPZZUHxXfNWj6LHYkl2/RShFyeIhOahFyZWuIdSOo3CGl3ox7NGdj9VFgZwANz/AHWFY+E9LM8ouS49Np+EeSthuNFZhLu5Npu8N6CIQ23cb8Z+SM/yqw2citL/AEFeq+JxmCQeWlZFlkpvWblVUa49qOVcPEvizJ82Tn91JWW4dsOy0NIHpl7cYwSFKvb6jM9wvJRuVPMfd6Zo5sSHsxuc0jKqeo07gmzHI5gz2PVXayOUHKiLXzgdluKSa1HF4IANtisWiYuk+pX3TZdjrzS7RyAbAHOVIy8vQMwfK2qbIzGWubkrp3SL0i/qU0rWT82CfKukrhPUY2ZxBYOpK16deFvLytbkf3W9XrttXa9fDjzv3LR0C6vorfvSycJUmVtP9X0gx8x5ic55h2UlqNCK9WfE8bkfC7wVsxtbGxrGbNaMABZTkPh6FZpT9nNZBY0u8cEsljdsfKu2havFqUABLW2Gj4mdM/VeXEml+/VeeJo9aPcHyPCpFSeSpZZMxxa9p7LQSjyIb+0ZndLi2Z/yzqKwtOhqMFyqyZjwM9QfKJFxkv0aKnFrdN1UHiqwJ9VeGuJawcpHgq82Zm168kr3crWNySuYzyOmmfLIcveckprhR2bf0J8+eQSPqtC6xPHCwZc9wauk0azadWOuzoxuOnUqqcGU3SW5LTm/AxvKMjufCuS7zbXKfb9HOBUow7n+wjhzNI8jCLws3K1VhdYmYwAZwXb/ALJI0DmkUT4NUuwO/llIClYxysJJCj7GJNUtWY3Zjkk5mn6LOoPcKuW5C8d1Cp/zMeh6JR0MU7dwCPooq9onMS+B2/gra0Kf1aQycuBUkErHl3UPIsliZTpdLssdl7RgfVYbXkYc9u6s1xmInlQmcxEp6PVbZL0iPaedWw82o64djmOMrp+m6bXos/Kb8ZADnnqVySGVkGpRSSnDQ8HK7HUnisV2TQvD2OGxC3On2O2Lcii09URFolAO4XPOIKpq6pM0AcrjzNx2yuhqr8a1yY4bDcbHldsmeLPtsQnza+6rSrRTyRNLWOwCc7LK8kWs4x30Y6nL7Oi8QHGjWv6P91znsrvxZZa7SXCCUH80MeGn+xVI2x/yk+CvixzqL+aL9wpE6LR4+dpBcSR9lMd1o6J/6mr/AEBbyz7Hs2alS/HErfFnEf4YPc6eHXHjv/IPKphY+y71bcrpZD1Lit/2iadbg1RmqRRufA5gYS0Z5fuoTS/fNamjq6a087v4khGzB5Ss9bwYjmaz7vTS1IeeAhwBGRnoFJafZg1GuOVwO2HBfXFXB1mhQE+lufYDWfnNccuJ8hUzSdRkqSfCC3B3BWT1Djtx0vhNMtETnaZbIcD6Tj+yskEjJWh7Dlp8KIpWoNQg+MDmIwcr1rwzU3kxEPj/AMq87bHf9LSUkjDwQQP1Vd1OSCAOZG5uc7hSs2qVo2/nPDHAdCua8QauwaiZIZQWl3lWcPjTsfk42butzemYXYJyc4CsvDXFE2nDHM70hu+F4wR9lTxb981Ck7ALfUbgD7rqPFfA34u73zTLAq2uTBaR8D/v4XqODXKEBexotem6hX1OqyxVcHMeM7dltKi+zXStd0d96tq8DGxFwLJGv6nyAr0tKPn2UsKH4prmfSnkED0yHFTC8bsTZ6ksbweRzTnCnB5JMrsXdFo5h+qI7ZxHhFvJpo821jwn+JjXgkkhrPDnTP55RnPK4Kv9lc9f4edbl9ekGte45eD3+qhv8M6gZxEWDlP/ANM7BJ8a2uMPLH+TTZKzwi16BKyTSq4Y5pLWAEA9CpFQ2kaBHpzmyGV75R1wcD9lMrOszueGpUmoJSMOa17S14DmnqD0WvToU6PN7pWih5/m5G4ytlFAsBAOxXMPaRwlFXZ+K6a4QudIGviDdjnuunqq+0N7DpkNfnHqSSghvcgdVXbFSjjJRbTKJplezTga6T5upwpKO4ZGFol5SVkOAiPMfh7qsXWatYsSv0ijLYjj+fkHRYN3T+6eoaUvB5cSQysJe+xkEdMqjWmP9Qk587q0N03iHViZPwyy5jfmJbsF8QaayxJ/5DRyt2ICcpplUsIuRP8Ase0aDUdU94tgvEDeZjT5+q7p2XHOBbH4dxDUgrMaGTfA7IXY1pVLEUT9mERFYQNV16H3r3UEulxkho6L3LgBhxAz5K1INLghvSW2l/qv65KxrGnt1Cq5mXMe3djm9QV3FqRW3LGUXVGMh1GwyIYYHnCLwsV7EMrmSxvDx1yEWxFxSXkxZJtv4nUcZTGM4WEWMbwREQAREQBlcw1q7Pe16yyw4Ftd/LGAMYCIq7PRKPs1LRxC7Hgq4+zyGNmgeq1oD5JHFx8oipq9ls/Rv8XTyUuGdRmrO9ORkJIIHRcU0wl0OTuTuSiK2ZXAmeGDy8U6eR2k/wBl2tEUoegn7CIimQCIiAR8ujY45LGn9ERF3WcxH//Z">
                    hi
                    <RatingStars />
                </CardBody>
            </div>
        </>
    )
}