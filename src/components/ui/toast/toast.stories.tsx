import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Meta } from '@storybook/react'

import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ['autodocs'],
  title: 'Components/Toast',
}

export default meta

export const Default = () => {
  const showToast = () => {
    toast('Default message')
  }

  return (
    <>
      <Button onClick={showToast}>Show Default</Button>
      <Toast />
    </>
  )
}
export const Error = () => {
  const showToast = () => {
    toast.error('Error message')
  }

  return (
    <>
      <Button onClick={showToast}>Show Error</Button>
      <Toast />
    </>
  )
}

export const Info = () => {
  const showToast = () => {
    toast.info('Info message')
  }

  return (
    <div>
      <Button onClick={showToast}>Show Info</Button>
      <Toast />
    </div>
  )
}

export const Success = () => {
  const showToast = () => {
    toast.success('Success message')
  }

  return (
    <>
      <Button onClick={showToast}>Show Success</Button>
      <Toast />
    </>
  )
}
