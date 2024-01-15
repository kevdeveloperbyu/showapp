import { StyleSheet } from 'react-native'
import React from 'react'
import { MD2Colors, Searchbar as SearchBarPaper } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

type SearchBarProps = {
    onIconPress: () => void
    onTraileringIconPress: () => void
}

const SearchBar = ({onIconPress, onTraileringIconPress}: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    console.log(searchQuery)
    return (
        <SearchBarPaper

            placeholder="Buscar evento, artista.."
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="bar"
            // rippleColor={MD2Colors.amber400}
            // icon={"search-web" }
            icon={({ color, size }) => <AntDesign name={"search1"} size={size} color={color} />}
            // rippleColor="green"
            onIconPress={() => onIconPress}

            traileringIcon={({ size, color, ...rest }) => {
                console.log(rest, color, size)
                return <FontAwesome5 name={"microphone"} size={size} color={color} />
            }
            }
            onTraileringIconPress={onTraileringIconPress}
            // traileringRippleColor={"violet"}
            style={styles.searchBar}
        />

    );
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: {
        padding: 0
    }
})