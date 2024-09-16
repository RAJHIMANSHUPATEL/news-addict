import { useGlobalContext } from './context';

const Search = () => {
    const {query, searchPost} = useGlobalContext();
    return (
        <>
            <div>
                <h1>Tech Addict</h1>
                <form>
                    <div>
                        <input 
                            type="text"
                            onChange={(e)=> searchPost(e.target.value)}
                            value={query} 
                            placeholder='Search here'
                        />

                    </div>
                </form>
            </div>
        </>
    )
}

export default Search