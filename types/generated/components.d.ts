import type { Schema, Struct } from '@strapi/strapi';

export interface BannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {};
}

export interface BtnTextBtnText extends Struct.ComponentSchema {
  collectionName: 'components_btn_text_btn_texts';
  info: {
    displayName: 'btnText';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CommonCaseCommonCase extends Struct.ComponentSchema {
  collectionName: 'components_common_case_common_cases';
  info: {
    displayName: 'commonCase';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactLinksContactLinks extends Struct.ComponentSchema {
  collectionName: 'components_contact_links_contact_links';
  info: {
    displayName: 'contactLinks';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phoneNumber: Schema.Attribute.BigInteger;
    socialImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface DetailsDetails extends Struct.ComponentSchema {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
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
    contactLinks: Schema.Attribute.Component<
      'contact-links.contact-links',
      false
    >;
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

export interface FreeConsultationFreeConsultation
  extends Struct.ComponentSchema {
  collectionName: 'components_free_consultation_free_consultations';
  info: {
    displayName: 'FreeConsultation';
  };
  attributes: {
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    mainTitle: Schema.Attribute.String & Schema.Attribute.Required;
    thumbnailImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    loginText: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    navBar: Schema.Attribute.Component<'nav-bar.nav-bar', true>;
    phoneNumber: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    searchText: Schema.Attribute.String;
  };
}

export interface HeroSectionsHeroSections extends Struct.ComponentSchema {
  collectionName: 'components_hero_sections_hero_sections';
  info: {
    displayName: 'heroSections';
  };
  attributes: {
    ctaText: Schema.Attribute.String & Schema.Attribute.Required;
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
    links: Schema.Attribute.Text & Schema.Attribute.Required;
    subLinks: Schema.Attribute.Component<'sub-links.sub-links', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NewsLetterNewsLetter extends Struct.ComponentSchema {
  collectionName: 'components_news_letter_news_letters';
  info: {
    displayName: 'newsLetter';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    mainTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface RelatedServiceListRelatedService
  extends Struct.ComponentSchema {
  collectionName: 'components_related_service_list_related_services';
  info: {
    displayName: 'relatedService';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
      'banner.banner': BannerBanner;
      'btn-text.btn-text': BtnTextBtnText;
      'common-case.common-case': CommonCaseCommonCase;
      'contact-links.contact-links': ContactLinksContactLinks;
      'details.details': DetailsDetails;
      'footer.footer': FooterFooter;
      'free-consultation.free-consultation': FreeConsultationFreeConsultation;
      'header.header': HeaderHeader;
      'hero-sections.hero-sections': HeroSectionsHeroSections;
      'lists.lists': ListsLists;
      'nav-bar.nav-bar': NavBarNavBar;
      'news-letter.news-letter': NewsLetterNewsLetter;
      'our-core-values.our-core-value': OurCoreValuesOurCoreValue;
      'our-core-values.why-choose-us': OurCoreValuesWhyChooseUs;
      'our-mission.our-mission': OurMissionOurMission;
      'practice-areas.practice-areas': PracticeAreasPracticeAreas;
      'related-service-list.related-service': RelatedServiceListRelatedService;
      'related-service-list.related-service-list': RelatedServiceListRelatedServiceList;
      'sub-links.sub-links': SubLinksSubLinks;
      'sub-lists.sub-lists': SubListsSubLists;
    }
  }
}
