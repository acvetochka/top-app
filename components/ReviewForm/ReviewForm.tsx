'use client';

import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { ReviewFormProps } from './ReviewForm.props';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from '@/public/closeReview.svg';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '@/app/api';
import { useState } from 'react';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, {
        ...formData,
        productId,
      });
      console.log(data);
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          placeholder="Имя"
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.name ? true : false}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
          aria-invalid={errors.title ? true : false}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            rules={{ required: { value: true, message: 'Укажите оценку' } }}
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'Заполните описание' } })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
          aria-lable="Текст отзыва"
          aria-invalid={errors.description ? true : false}
        />
        <div className={styles.submit}>
          <Button
            appearance="primary"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => { clearErrors() }}
          >
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      <div>
        {isSuccess && (
          <div className={cn(styles.panel, styles.success)} role='alert'>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
            <button 
            className={styles.close} 
            onClick={() => setIsSuccess(false)} 
            aria-label='Закрыть оповещение'
            >
              <CloseIcon/>
            </button>
          </div>
        )}
        {error && (
          <div className={cn(styles.panel, styles.error)} role='alert'>
            {error}
            Что-то пошло не так, попробуйте обновить страницу
            <button 
            className={styles.close} 
            onClick={() => setError(undefined)}
            aria-label='Закрыть оповещение'
            >
              <CloseIcon/>
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
