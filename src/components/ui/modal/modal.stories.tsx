import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import { Modal } from './'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalFromDeleteCard: Story = {
  args: {
    isOpen: true,
    onChange: () => {},
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Modal
          {...args}
          isOpen={open}
          onChange={setOpen}
          title={'Delete card'}
          titleBtn={'Delete card'}
        >
          <Typography
            as={'div'}
            style={{ fontFamily: 'Helvetica, sans-serif', padding: '18px 24px' }}
          >
            Do you really want to remove <strong>Card Name?</strong> All cards will be deleted.
          </Typography>
          <Typography
            as={'div'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 24px',
            }}
          >
            <Button
              onClick={() => setOpen(false)}
              style={{ marginLeft: '0' }}
              variant={'secondary'}
            >
              Cansel
            </Button>
            <Button variant={'primary'}>Delete card</Button>
          </Typography>
        </Modal>
      </>
    )
  },
}
