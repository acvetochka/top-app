const data = {
  title: "Top App: Обучение онлайн на лучших курсах!",
  description: "Top App: Обучение онлайн на лучших курсах! Развивайте навыки в программировании, дизайне, маркетинге, языках, управлении и многих других областях. Лучшие преподаватели, актуальные темы и высококачественный контент. Выберите свой путь к успеху с Top App уже сегодня!",
  keywords: "онлайн-обучение, курсы, Top App",
  locale: 'ru_RU',
}

const {title, description, keywords, locale} = data;

export const meta = {
    title,
    description,
    keywords,
    locale,
    openGraph: {
        title,
        description,
        locale,
        type: "website",
    },
    twitter: {
        title,
        description, 
    }
}