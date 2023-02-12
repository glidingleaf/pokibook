import './PokemonAttributes.css';
import toCamelCaps from '@utils/toCamelCaps.js';

const PokemonAttributes = ({ attributes: {
  baseExperience,
  height,
  weight,
  types,
  abilities,
  heldItems,
} }) => {


  return (
    <table>

      <tbody>
        <tr>
          <th className='attribute-name'>Base Experience</th>
          <td className='attribute-value'>{baseExperience}</td>
        </tr>
        <tr>
          <th className='attribute-name'>Height</th>
          <td className='attribute-value'>{height}</td>
        </tr>
        <tr>
          <th className='attribute-name'>Weight</th>
          <td className='attribute-value'>{weight}</td>
        </tr>
        {
          abilities.length == 0 ? null :
            <tr>
              <th className='attribute-name'>Abilities</th>
              <td>
                {
                  abilities.map((abilityObj,index) => {
                    return (
                      <div key={index} className='attribute-value'>
                        {
                          toCamelCaps(abilityObj['ability']['name'])
                        }
                      </div>

                    )
                  })
                }

              </td>
            </tr>
        }
        {
          heldItems.length == 0 ? null :
            <tr>
              <th className='attribute-name'>Held Items</th>
              <td>
                {
                  heldItems.map((heldItemsObj,index) => {
                    return (
                      <div key={index} className='attribute-value'>
                        {
                          toCamelCaps(heldItemsObj['item']['name'])
                        }
                      </div>

                    )
                  })
                }

              </td>
            </tr>
        }

        {
          types.length == 0 ? null :
            <tr>
              <th className='attribute-name'>Types</th>
              <td>
                {
                  types.map((typesObj,index) => {
                    return (
                      <div key={index} className='attribute-value'>
                        {
                          toCamelCaps(typesObj['type']['name'])
                        }
                      </div>

                    )
                  })
                }
              </td>
            </tr>
        }
      </tbody>

    </table>
  )
}


export default PokemonAttributes;