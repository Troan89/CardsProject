import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Icons } from '@/assets/icons/Icons'
import { FormCheckbox } from '@/components/formComponents/formCheckbox'
import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'
import { Modal } from '@/components/ui/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './deck-dialog-form.module.scss'

const newDeckSchema = z.object({
  cover: z.instanceof(File),
  isPrivate: z.boolean(),
  name: z.string().min(3).max(50),
})

type FormValues = z.infer<typeof newDeckSchema>

type Props = {
  deckId?: string
  deckName?: string
  onClick: (data: FormValues) => void
}

export const DeckDialogForm = ({ onClick }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      cover: undefined,
      isPrivate: false,
      name: '',
    },
    resolver: zodResolver(newDeckSchema),
  })

  const [open, setOpen] = useState<boolean>(false)

  const onSubmit = handleSubmit(data => {
    onClick(data)
    setOpen(false)
    reset()
  })
  const handleCancelBtn = () => {
    reset()
    setOpen(false)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Add New Deck'}
      titleBtn={'Add New Deck'}
      variantBtn={'primary'}
    >
      <form onSubmit={onSubmit}>
        <div className={s.input}>
          <FormTextField
            control={control}
            error={errors.name?.message}
            label={'Name pack'}
            name={'name'}
            placeholder={'Name'}
            type={'text'}
          />
          <div className={s.Button}>
            <Controller
              control={control}
              name={'cover'}
              render={({ field }) => (
                <ImageUploader
                  id={'cover'}
                  setFile={(img: File | null) => field.onChange(img)} // Используем field.onChange для обновления значения поля
                  trigger={
                    <Button as={'span'} fullWidth variant={'secondary'}>
                      <Icons iconId={'upload_image'} /> Upload image
                    </Button>
                  }
                />
              )}
            />
          </div>
          <FormCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
        </div>
        <div className={s.btn}>
          <Button onClick={handleCancelBtn} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'} variant={'primary'}>
            Add New Pack
          </Button>
        </div>
      </form>
    </Modal>
  )
}
