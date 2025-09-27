import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCaseCommonCase extends Struct.ComponentSchema {
  collectionName: 'components_common_case_common_cases';
  info: {
    displayName: 'commonCase';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    relatedServiceList: Schema.Attribute.Component<
      'related-service-list.related-service-list',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    aboutUsLinks: Schema.Attribute.Component<'sub-links.sub-links', true>;
    aboutUsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    contactUsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    copyRightText: Schema.Attribute.String & Schema.Attribute.Required;
    legalLinks: Schema.Attribute.Component<'sub-links.sub-links', true>;
    poweredByText: Schema.Attribute.String & Schema.Attribute.Required;
    practiceAreaLinks: Schema.Attribute.Component<'sub-links.sub-links', true>;
    practiceAreaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    resourcesLinks: Schema.Attribute.Component<'sub-links.sub-links', true>;
    resourcesTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    navBar: Schema.Attribute.Component<'nav-bar.nav-bar', true>;
  };
}

export interface HeroSectionsHeroSections extends Struct.ComponentSchema {
  collectionName: 'components_hero_sections_hero_sections';
  info: {
    displayName: 'heroSections';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListsLists extends Struct.ComponentSchema {
  collectionName: 'components_lists_lists';
  info: {
    displayName: 'lists';
  };
  attributes: {
    practiceAreasDetails: Schema.Attribute.Relation<
      'oneToMany',
      'api::practice-areas-detail.practice-areas-detail'
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavBarNavBar extends Struct.ComponentSchema {
  collectionName: 'components_nav_bar_nav_bars';
  info: {
    displayName: 'navBar';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    languageText: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Text & Schema.Attribute.Required;
    loginText: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    searchText: Schema.Attribute.String & Schema.Attribute.Required;
    subLinks: Schema.Attribute.Component<'sub-links.sub-links', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurCoreValuesOurCoreValue extends Struct.ComponentSchema {
  collectionName: 'components_our_core_values_our_core_values';
  info: {
    displayName: 'ourCoreValue';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurCoreValuesWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_our_core_values_why_chooseuses';
  info: {
    displayName: 'whyChooseUs';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface OurMissionOurMission extends Struct.ComponentSchema {
  collectionName: 'components_our_mission_our_missions';
  info: {
    displayName: 'ourMission';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PracticeAreasPracticeAreas extends Struct.ComponentSchema {
  collectionName: 'components_practice_areas_practice_areas';
  info: {
    displayName: 'practiceAreas';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface RelatedServiceListRelatedServiceList
  extends Struct.ComponentSchema {
  collectionName: 'components_related_service_list_related_service_lists';
  info: {
    displayName: 'relatedServiceList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SubLinksSubLinks extends Struct.ComponentSchema {
  collectionName: 'components_sub_links_sub_links';
  info: {
    displayName: 'subLinks';
  };
  attributes: {
    links: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SubListsSubLists extends Struct.ComponentSchema {
  collectionName: 'components_sub_lists_sub_lists';
  info: {
    displayName: 'subLists';
  };
  attributes: {
    links: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common-case.common-case': CommonCaseCommonCase;
      'footer.footer': FooterFooter;
      'header.header': HeaderHeader;
      'hero-sections.hero-sections': HeroSectionsHeroSections;
      'lists.lists': ListsLists;
      'nav-bar.nav-bar': NavBarNavBar;
      'our-core-values.our-core-value': OurCoreValuesOurCoreValue;
      'our-core-values.why-choose-us': OurCoreValuesWhyChooseUs;
      'our-mission.our-mission': OurMissionOurMission;
      'practice-areas.practice-areas': PracticeAreasPracticeAreas;
      'related-service-list.related-service-list': RelatedServiceListRelatedServiceList;
      'sub-links.sub-links': SubLinksSubLinks;
      'sub-lists.sub-lists': SubListsSubLists;
    }
  }
}
