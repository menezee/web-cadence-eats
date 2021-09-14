import Menu from 'baseui/icon/menu';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import { UberEatsLogo } from '../../images';

function Header() {
  const narrowItem = {
    overrides: {
      Block: {
        style: ({$theme}) => ({
          width: $theme.sizing.scale1400,
          flexGrow: 0,
        }),
      },
    },
  };
  
  return (
    <FlexGrid
      flexGridColumnCount={3}
      padding="scale900"
    >
      <FlexGridItem {...narrowItem}>
        <Menu size={23} />
      </FlexGridItem>
      <FlexGridItem>
        <img src={UberEatsLogo} alt="Página inicial do Uber Eats" height={20}/>
      </FlexGridItem>
      <FlexGridItem/>
    </FlexGrid>
  );
}

export default Header;
