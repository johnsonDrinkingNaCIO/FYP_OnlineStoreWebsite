function UserDataForm({ onSave }) {
    return (
        <form action="#" className='UserData flex OptionBG flexItem'>
            <div className='padding leftChild'>UserName:
                <input></input>
            </div>
            <div className='padding leftChild'>Pronounce:
                <input></input>
            </div>
            <div className='padding leftChild'>Address:
                <input></input>
            </div>
            <div className='padding leftChild'>E-mail:
                <input></input>
            </div>
            <div className='padding leftChild'>Extra Settings:
                <select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div>
                <button>Cancel</button>
                <button onClick={onSave}>Save</button>
            </div>
        </form>
    );
}

export default UserDataForm;