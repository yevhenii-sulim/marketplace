import { navigationList } from 'data/navListData';
import { Wrapper } from './CatalogCategoryMobileComponent.styled';
import CategoryHomePage from 'components/CategoryList/CategoryHomePage';

export default function CatalogCategoryMobileComponent() {
  return (
    <Wrapper>
      {navigationList.map(
        ({ id, linkList, nameList, subCategories, img }, index) => {
          return (
            <CategoryHomePage
              key={id}
              nameCategory={{
                category: { en: linkList, ua: nameList },
              }}
              titleCategory={nameList}
              srcCategory={img}
              link={linkList}
              subCategories={subCategories}
            />
          );
        }
      )}
    </Wrapper>
  );
}
