import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test11.caption'),
          title: i18n.t('forms.application.sitemap.test11.title'),
          children: [{
            link: 'i-i-s-test11-new-class1-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class1-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class1-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-test11-new-class2-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class2-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class2-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-test11-new-class3-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class3-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class3-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-test11-new-class4-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class4-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class4-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-test11-new-class5-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class5-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class5-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-test11-new-class6-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class6-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class6-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test11-new-class7-l',
            caption: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class7-l.caption'),
            title: i18n.t('forms.application.sitemap.test11.i-i-s-test11-new-class7-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})